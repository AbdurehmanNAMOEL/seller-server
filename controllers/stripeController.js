const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)

const stripeCheckOut=async (req, res) => {
    const {checkoutItem}=req.body
    console.log(checkoutItem);
    const line_items=checkoutItem.map(data=>{
       return {
        price_data:{
            currency:'usd',
            product_data:{
                name:data.title,
                images:[`http://localhost:3000/${data.image}`]
            },
            unit_amount:parseInt(data.price.split('$')[0])*100,
        },
        quantity: data.cartQuantity,
      }}
        )
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `http://localhost:3000/`,
    cancel_url: `http://localhost:3000/hh`,
  });

  res.send({url:session.url});
};

module.exports=stripeCheckOut