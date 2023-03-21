<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $todos = Todo::get();

        return Inertia::render('Todo', ['todos' => $todos]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request)
    {
        $todo = Todo::create([
            'name' => $request->name,
            'is_done' => 0,
        ]);
        return Redirect::route('todo.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Todo $todo
     * @return Response
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Todo $todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Todo $todo
     * @return RedirectResponse
     */
    public function update(Request $request, Todo $todo)
    {
        $todo->update([
            'is_done' => $request->is_done ?? $todo->is_done,
            'name' => $request->name ?? $todo->name,
        ]);

        return Redirect::route('todo.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Todo $todo
     * @return RedirectResponse
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();
        return Redirect::route('todo.index');
    }
}
