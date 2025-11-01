<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelHtags extends Model
{
    use HasFactory;

    protected $table = 'htag';

    public $timestamps = false;

    protected $fillable = [
        'body'
    ];
}
