<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin Model
 */
class Department extends Model
{
    protected $hidden = ["updated_at","name", "description", "birth_date", "icon","backdrop","external_link","created_at"];
    use HasFactory;
}
