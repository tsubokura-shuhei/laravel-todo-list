import React from "react";
import { useForm } from "@inertiajs/react";
import Select from "react-select";
import DangerButton from "@/Components/DangerButton";

const Todo = ({ todo }) => {
    const { data, setData, patch, delete: destroy, processing } = useForm(todo);

    const update = (e) => {
        data.processing = e.value;
        patch(route("todo.update", todo.id));
    };

    const options = [
        { value: 0, label: "未着手" },
        { value: 1, label: "進行中" },
        { value: 2, label: "完了" },
    ];

    const destroySubmit = (e) => {
        e.preventDefault();
        destroy(route("todo.destroy", todo.id));
    };

    return (
        <tr className="w-full text-left border-solid border border-white pl-3 bg-gray-200  ">
            <td
                className={`border-solid border border-white pl-3 bg-gray-200 w-3/12 p-3 ${
                    data.processing === 2 && "line-through"
                }`}
            >
                {todo.title}
            </td>
            <td
                className={`border-solid border border-white pl-3 bg-gray-200 w-3/12 p-3 ${
                    data.processing === 2 && "line-through"
                }`}
            >
                {todo.quantity}
            </td>
            <td
                className={`border-solid border border-white pl-3 bg-gray-200 w-3/12 p-3 ${
                    data.processing === 2 && "line-through"
                }`}
            >
                {todo.remarks}
            </td>
            <td className="border-solid border border-white pl-3 bg-gray-200 w-3/12 p-3 ">
                <Select
                    className="w-full"
                    options={options}
                    defaultValue={options[data.processing]}
                    onChange={update}
                />

                <form onSubmit={destroySubmit} className="mt-3 w-full ">
                    <DangerButton className="" disabled={processing}>
                        削除
                    </DangerButton>
                </form>
            </td>
        </tr>
    );
};

export default Todo;
