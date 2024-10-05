<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Todo extends Model
{
    protected $fillable = [
        'title',
        'quantity',
        'remarks',
        'progress',
    ];

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
