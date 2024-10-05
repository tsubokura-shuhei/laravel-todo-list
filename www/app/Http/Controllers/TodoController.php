<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():Response
    {
        return Inertia::render('Todos/Index',['todos' => \Auth::user()->todos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'quantity' => 'required|integer|min:1',
            'remarks' => 'required|string|max:255',
        ]);

        $request->user()->todos()->create($validated);

        return redirect(route('todo.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo):RedirectResponse
    {
        $this->authorize('update',$todo);
        $todo->update($request->all());
        return redirect(route('todo.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo):RedirectResponse
    {
        $this->authorize('delete',$todo);
        $todo->delete();
        return redirect(route('todo.index'));
    }
}
