import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SubmitTodo from "@/Components/SubmitTodo";
import Todo from "@/Components/Todo";

const Index = ({ auth, todos }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Todo" />
            <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1 className="mb-2 text-lg font-bold text-gray-600">
                    買い物リスト
                </h1>
                <div className="mb-12">
                    <div className="flex items-center ">
                        <table className="w-full text-left ">
                            <tr className="w-full text-left border-solid border border-white pl-3 bg-gray-200  ">
                                <td className="border-solid border border-white pl-3 font-bold bg-gray-200 w-3/12 p-3 text-gray-600">
                                    商品名
                                </td>
                                <td className="border-solid border border-white pl-3 font-bold bg-gray-200 w-3/12 p-3 text-gray-600">
                                    数量
                                </td>
                                <td className="border-solid border border-white pl-3 font-bold bg-gray-200 w-3/12 p-3 text-gray-600">
                                    メモ
                                </td>
                                <td className="border-solid border border-white pl-3 font-bold bg-gray-200 w-3/12 p-3 text-gray-600">
                                    管理
                                </td>
                            </tr>
                            {todos.map((todo) => (
                                <Todo key={todo.id} todo={todo} />
                            ))}
                        </table>
                    </div>
                </div>

                <hr />

                <SubmitTodo />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
