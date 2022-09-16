<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogFaqCategory;
use App\Http\Requests\StoreBlogFaqRequest;
use App\Http\Resources\BlogFaqCategoryResource;

class BlogFaqCategoryController extends Controller
{
    public function index()
    {
        $blogsFaq = BlogFaqCategory::get();
        return response()->json([
            'status' => 'success' ,
            'data' => BlogFaqCategoryResource::collection($blogsFaq)
        ]);
    }

    public function store(StoreBlogFaqRequest $request)
    {
        $validated = $request->validated();
        BlogFaqCategory::create($validated);
        return response()->json([
            'status' => 'success' ,
             'message' => 'records saved!'
        ]);
    }

    public function show(BlogFaqCategory $BlogFaqCategory, Request $request)
    {   
        return response()->json([
            'status' => 'success' ,
            'data' => new BlogFaqCategoryResource($BlogFaqCategory)
        ]);
    }

    public function destroy(BlogFaqCategory $BlogFaqCategory)
    {
        $BlogFaqCategory->delete();
        return response()->json([
            'status' => 'success' ,
             'message' => 'records deleted!'
        ]);
    }

}
