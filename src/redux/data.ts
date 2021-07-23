
interface Data{
    id:string
    wallet:string
    des:string
    time:string
    price:string
  
}

interface MyData{
   day14:Data[],
   day13:Data[]
}

export let datas:MyData = {
    day14:[
        {
            id:'1',
            wallet:'Bitcoins',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0017 BTC',
       
        },
        {
            id:'2',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0017 BTC',
           
        },
        {
            id:'3',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0017 BTC',
         
        },
        {
            id:'42',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0017 BTC',
         
        },
        {
            id:'4',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0017 BTC',
          
        },
        {
            id:'5',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0017 BTC',
       
        },
        {
            id:'6',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0017 BTC',
          
        },
    ],

    day13:[
        {
            id:'7',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0067 BTC',
           
        },
        {
            id:'8',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0067 BTC',
          
        },
        {
            id:'9',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0067 BTC',
         
        },
        {
            id:'10',
            wallet:'Bitcoin',
            des:'Exchange Trading',
            time:'02:03 PM',
            price:'+0,0017 BTC',
          
        }
    ]
}


interface WData{
    name:string,
    id:string
}


export const WalletsData:WData[] = [
    {
        name:'Bitcoin',
        id:'1'
    },
    {
        name:'Mastercard',
        id:'2'
    },
    {
        name:'Visa',
        id:'3'
    },
    {
        name:'Paypal',
        id:'4'
    },
]