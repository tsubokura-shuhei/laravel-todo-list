import React from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

const SubmitTodo = () => {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        quantity: "",
        remarks: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("todo.store"), { onSuccess: () => reset() });
    };

    return (
        <>
            <form onSubmit={submit} className="flex justify-center flex-col">
                <input
                    value={data.title}
                    type="text"
                    className="w-12/12 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mb-4"
                    placeholder="商品名"
                    onChange={(e) => setData("title", e.target.value)}
                />
                <input
                    value={data.quantity}
                    type="text"
                    className="w-12/12 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mb-4"
                    placeholder="数量"
                    onChange={(e) => setData("quantity", e.target.value)}
                />
                <input
                    value={data.remarks}
                    type="text"
                    className="w-12/12 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mb-6"
                    placeholder="メモ"
                    onChange={(e) => setData("remarks", e.target.value)}
                />
                <InputError message={errors.message} className="mt-2" />
                <PrimaryButton
                    className=" w-4/12 flex justify-center ml-auto mr-auto"
                    disabled={processing}
                >
                    登録する
                </PrimaryButton>
            </form>
        </>
    );
};

export default SubmitTodo;
