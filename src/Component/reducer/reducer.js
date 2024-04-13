import React, { createContext, useReducer } from 'react'

const context= createContext()

export const initialState = {
        List: [
                {
                    id: 1,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1d455f4c-48df-4228-8fdb-51129f10491d.jpg?ts=1711016007",
                    name: "Ladies finger",
                    price: "40",
                    discount: "₹35",
                    quantity: "1kg",
                    product: "vegetables"

                },

                {
                    id: 2,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4a7cbdcc-d74d-403f-a0cb-b130572ad296.jpg?ts=1711022176",
                    name: "Cucumber",
                    price: "30",
                    discount: "₹28",
                    quantity: "500G",
                    product: "vegetables"
                },
                

                
                {
                    id: 3,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/8c4716a2-6984-4806-ab2d-95898b56e076.jpg?ts=1710576420",
                    name: "Potato",
                    price: "45",
                    discount: "₹40",
                    quantity: "1kg",
                    product: "vegetables"

                },
                {
                    id: 4,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9f15926a-a469-4a19-a161-e797070e831a.jpg?ts=1711024455",
                    name: "Green capsicum",
                    price: " 50",
                    discount: "₹45",
                    quantity: "500G",
                    quantity: "1kg",
                    product: "vegetables"


                },
                {
                    id: 5,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/340d9756-933e-4a9d-9a2b-2f2a1db8f3d6.jpg?ts=1710487040",
                    name: "Mushroom",
                    price: "₹59",
                    discount: "₹49",
                    quantity: "750G",
                    product: "vegetables"
                },
                {
                    id: 6,
                    image: " https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2464b75b-750f-4474-aa2f-91ea721a5456.jpg?ts=1710486967",
                    name: "Ginger",
                    price: "70",
                    discount: "₹55",
                    quantity: "1kg",
                    product: "vegetables"
                },
                {
                    id: 7,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/fc97e36f-ae48-4261-99d7-718cb9b2f5e6.jpg?ts=1711010248",
                    name: "onion",
                    price: "40",
                    discount: "₹35",
                    quantity: "1kg",
                    product: "vegetables"
                },
                {
                    id: 8,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c6d46c8c-392f-47bc-86bd-b6081fd85325.jpg?ts=1711100075",
                    name: "Tomato",
                    price: " 45",
                    discount: "40",
                    quantity: "1kg",
                    product: "vegetables"
                },
                {
                    id: 1,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9dd81f38-c701-4503-8ef8-e965dc8435c4.jpg?ts=1711027231",
                    name: "Apple",
                    price: "70",
                    discount: "₹60",
                    quantity: "1kg",
                    product: "fruits"
                },
                {
                    id: 2,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/30ea4b2c-ac7f-41e1-866e-0bd006366390.jpg?ts=1710502549",
                    name: "Black grapes",
                    price: "40",
                    discount: "₹35",
                    quantity: "1kg",
                    product: "fruits"
                },
                {
                    id: 3,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/114f8dec-1b48-47f7-8be5-9ce354a8203a.jpg?ts=1711427558",
                    name: "Watermelon",
                    price: "25",
                    discount: "₹22",
                    quantity: "1kg",
                    product: "fruits"
                },
                {
                    id: 4,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/00287fa2-4eb4-47f3-acf5-14a83c93fe6f.jpg?ts=1707203700",
                    name: "Banana",
                    price: "28",
                    discount: "₹25",
                    quantity: "3pieces",
                    product: "fruits"


                },
                {
                    id: 5,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto, fit=scale-down, q=70, metadata=none,w=270/app/assets/products/sliding_images/jpeg/310f156d-49c1-48ff-b7e1-c6dbae86cd66.jpg?ts=1710753513",
                    name: "Pomegrante",
                    price: "140",
                    discount: "₹135",
                    quantity: "1kg",
                    product: "fruits"
                },
                {
                    id: 6,
                    image: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702734004998-8",
                    name: "Green grapes",
                    price: "70",
                    discount: "₹65",
                    quantity: "500g",
                    product: "fruits"
                },
                {
                    id: 7,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70, metadata=none,w=270/app/assets/products/sliding_images/jpeg/549b6df5-74f3-41f9-b4d4-07d2dc81b1ee.jpg?ts=1710495206",
                    name: "Mango",
                    price: "120",
                    discount: "₹115",
                    quantity: "1kg",
                    product: "fruits"
                },
                {
                    id: 8,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70, metadata=none,w=270/app/assets/products/sliding_images/jpeg/afaa9796-9d66-4302-a626-77d6fe242940.jpg?ts=1710487100",
                    name: "Kiwi",
                    price: "169",
                    discount: "₹159",
                    quantity: "3pieces",
                    product: "fruits"
                },
                {
                    id: 1,
                    image: "https://cdn.grofers.com/app/images/category/cms_images/icon/957_1643445598079.png",
                    name: "TATA tea",
                    price: "120",
                    discount: "₹110",
                    quantity: "200g",
                    product: "grocery"

                },
                {
                    id: 2,
                    image: "https://cdn.grofers.com/app/images/category/cms_images/icon/1322_1643445664338.png",
                    name: "Nescafe coffe powder",
                    price: "140",
                    discount: "₹120",
                    quantity: "200g",
                    product: "grocery"
                },
                {
                    id: 3,
                    image: "https://cdn.grofers.com/app/images/category/cms_images/icon/1165_1643445834987.png",
                    name: "Aashirvaad atta",
                    price: "303",
                    discount: "₹297",
                    quantity: "5kg",
                    product: "grocery"
                },
                {
                    id: 4,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70, metadata=none,w=270/app/assets/products/sliding_images/jpeg/6f9d838a-7a49-4311-93f5-becad952b99f.jpg?ts=1709716796",
                    name: "India gate basmati rice",
                    price: "103",
                    discount: "₹97",
                    quantity: "1kg",
                    product: "grocery"
                },
                {
                    id: 5,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70,metadata=none,w=270/app/images/products/sliding_image/114827a.jpg?ts=1703172626",
                    name: "Udhayam dall",
                    price: "240",
                    discount: "220",
                    quantity: "1kg",
                    product: "grocery"
                },
                {
                    id: 6,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70, metadata=none,w=270/app/assets/products/sliding_images/jpeg/983dc9bc-ffce-422f-84a1-e849678fba70.jpg?ts=1707312306",
                    name: "Sun flower refine oil",
                    price: "112",
                    discount: "₹102",
                    quantity: "11",
                    product: "grocery"
                },
                {
                    id: 7,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down, q=70,metadata=none,w=270/app/images/products/sliding_image/479760a.jpg?ts=1700550167",
                    name: "Vijay ragi flour",
                    price: "55",
                    discount: "49",
                    quantity: "500g",
                    product: "grocery"
                },
                {
                    id: 8,
                    image: "https://cdn.grofers.com/app/images/category/cms_images/icon/50_1643446001120.png",
                    name: "Everest chilli powder",
                    price: "120",
                    discount: "₹114",
                    quantity: "100g",
                    product: "grocery"
                },
                {
                    id: 1,
                    image: "https://cdn.grofers.com/app/images/category/cms_images/icon/1102_1649432926740.png",
                    name: "Coca cola",
                    price: "97",
                    discount: "₹90",
                    quantity: "2.25l",
                    product: "cooldrinks"
                },
                {
                    id: 2,
                    image: "https://cdn.grofers.com/app/images/category/cms_images/icon/1108_1684311412858.png",
                    name: "Maazaa",
                    price: "60",
                    discount: "₹55",
                    quantity: "650ml",
                    product: "cooldrinks"


                },
                {
                    id: 3,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f87f19e-66da-48cd-8c75-343abf732948.jpg?ts=1707312325",
                    name: "Sprite",
                    price: "45",
                    discount: "42",
                    quantity: "700m1",
                    product: "cooldrinks"
                },
                {
                    id: 4,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/159dec5b-d993-44cf-b7cc-2fb6062614a4.jpg?ts=1708593033",
                    name: "Fanta",
                    price: " 96",
                    discount: "₹85",
                    quantity: "2.251",
                    product: "cooldrinks"
                },
                {
                    id: 5,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e22f6a96-f0f5-471d-b0c8-0784f58eec68.jpg?ts=1707312324",
                    name: "Pepsi",
                    price: "39",
                    discount: "₹32",
                    quantity: "500ml",
                    product: "cooldrinks"
                },
                {
                    id: 6,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/63071e48-ead8-436e-b086-940c3c308dbf.jpg?ts=1709661367",
                    name: "Limonota",
                    price: "22",
                    discount: "₹20",
                    quantity: "600ml",
                    product: "cooldrinks"
                },
                {
                    id: 7,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cbeba373-78d1-4906-91cf-101bd163bc33.jpg?ts=1708590985",
                    name: "7up",
                    price: "100",
                    discount: "95",
                    quantity: "2.25ml",
                    product: "cooldrinks"
                },
                {
                    id: 8,
                    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e78e3b2e-1c35-424d-b023-6378bba3ca77.jpg?ts=1707312323",
                    name: "Miranda",
                    price: " 45",
                    discount: "₹40",
                    quantity: "750ml",
                    product:  "cooldrinks"
                }
            ],       
         Count: 1
}

const reduce = (state,action ) => {
    console.log(state, action)
}

const Reducer= ({ children }) => {
 const [state, dispatch] = useReducer(reduce,initialState)
    return (
        <context.Provider value={{ state, dispatch }}>
            <div>
            {children}
            </div>
        </context.Provider>
    )
}

export { Reducer,context}
