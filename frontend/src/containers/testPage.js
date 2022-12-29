import React from 'react';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import useBackend from './hooks/useBackend'
import {useState} from 'react'
import OptionModal from './testModal'

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const TestPage = ()=>{

    const [optionNum, setOptionNum] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [product, setProduct] = useState({});

    const [form] = Form.useForm();
    const [catform] = Form.useForm();
    const [productForm] = Form.useForm();
    const [itemForm] = Form.useForm();
    const [billForm] = Form.useForm();
    const { AddCategory, AddUser, GetProductsByCategory,
        AddProductToCategory, UpdateProduct, GetProductById,
        AddItemToBill, AddBillToUser, GetUserBill, FindBill, UpdateBillAddress} = useBackend();

    const onAddUser = ()=>{
        const user = form.getFieldValue();
        console.log('on add user', user);
        AddUser(user.name, user.lineId, user.address, user.phoneNumber);
    }

    const onAddCategory = ()=>{
        const category = catform.getFieldValue();
        console.log('on add category', category);
        AddCategory(category.cat_name);
    }

    const onAddProduct = () => {
        const product = productForm.getFieldValue();
        console.log('on add product', product);
        setProduct(product);
        setOptionNum(product.o_num);
        setModalOpen(true);
        // AddProductToCategory(product);
    }

    const onConfirmProduct = (product, optionArray) => {
        console.log('confirm product:',product, optionArray);
        const Product = {
            name: product.name,
            category: product.category,
            URL: product.url,
            price: product.price,
            note: product.note,
            product_type: product.type,
            option_type: product.o_type,
            options: optionArray
        }
        console.log('confirming product added', Product)
        AddProductToCategory(Product);
    }

    const onReset = () => {
        console.log(form.getFieldValue());
    };

    
  return (
    <>
    <OptionModal
        optionNums={optionNum}
        open={modalOpen} //press add, modal jumps out.
        onCreate={(optionArray) => { //press create, modify option array    
            console.log('on create values', optionArray)
            if(optionArray) onConfirmProduct(product, optionArray);
            setModalOpen(false);
        }}
        onCancel={() => { setModalOpen(false);}}
    />
    <Form {...layout} form={form} name="control-hooks">
        User register
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="lineId" label="lineId" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="address" label="address" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="phoneNumber" label="phone" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button htmlType="button" onClick={onAddUser}>
                Add
            </Button>
            <Button htmlType="button" onClick={onReset}>
                Update
            </Button>
        </Form.Item>
    </Form>
    <p>________</p>
    <Form {...layout} form={catform} name="control-hooks">
        Category
        <Form.Item name="cat_name" label="Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button htmlType="button" onClick={onAddCategory}>
                Add
            </Button>
            <Button htmlType="button" onClick={onReset}>
                Update
            </Button>
        </Form.Item>
    </Form>
    <p>________</p>
    <Form {...layout} form={productForm} name="control-hooks">
        Product
        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
            <Select options={[
            {
            value: 'jack',
            label: 'Jack',
            },
            {
            value: 'lucy',
            label: 'Lucy',
            }]}/>
        </Form.Item>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="url" label="url" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="price" label="price" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="note" label="note">
            <Input />
        </Form.Item>
        <Form.Item name="type" label="product_type" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="o_type" label="option type" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="o_num" label="option numbers" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button htmlType="button" onClick={onAddProduct}>
                Add
            </Button>
            <Button htmlType="button" onClick={onReset}>
                Update
            </Button>
        </Form.Item>
    </Form>
    <p>________</p>
    <Form {...layout} form={billForm} name="control-hooks">
        Bill
        <Form.Item name="userLineId" label="lineId">
            <Input />
        </Form.Item>
        <Form.Item name="package" label="package" rules={[{ required: true }]}>
            <Select options={[
                {
                value: '泡泡紙',
                label: '泡泡紙',
                },
                {
                value: '破壞袋',
                label: '破壞袋',
            }]}/>
        </Form.Item>
        <Form.Item name="total" label="total" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="payment" label="payment" rules={[{ required: true }]}>
            <Select options={[
                {
                value: '現金',
                label: '現金',
                },
                {
                value: '刷卡',
                label: '刷卡',
            }]}/>
        </Form.Item>
        <Form.Item name="address" label="address">
            <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button htmlType="button">
                Add
            </Button>
            <Button htmlType="button" onClick={onReset}>
                Update
            </Button>
        </Form.Item>
    </Form>

    </>
  );
}

export default TestPage