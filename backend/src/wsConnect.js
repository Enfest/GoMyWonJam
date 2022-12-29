import { AddUser ,AddBillToUser, AddCategory, AddProductToCategory, AddItemToBill } from './functions/AddFunc'


//helper functions
const sendData = (data, ws) =>{
    ws.send(JSON.stringify(data));
    console.log('send data called. (in wsConnect.js, line 5)');
}

export default {
    initData: (ws) => {
        console.log('data initialization called.')
    },
    onMessage: async (wss, ws, e) => {
        const [task, payload] = JSON.parse(e.data);
        switch (task) {
            //Add functions
            case 'AddUser':{
                AddUser(payload);
                break;
            }
            case 'AddCategory':{
                AddCategory(payload);
                break;
            }
            case 'AddProductToCategory':{
                AddProductToCategory(payload);
                break;
            }
            case 'AddBillToUser':{
                const {userLineId} = payload;
                AddBillToUser(userLineId);
                break;
            }
            //Update functions
        }
    }
}


