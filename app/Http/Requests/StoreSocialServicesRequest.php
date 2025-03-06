<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSocialServicesRequest extends FormRequest
{
    public function authorize()
    {
        return true; // Adjust authorization as needed
    }

    public function rules()
    {
        return [
            'service_type' => 'required|in:Healthcare,Education,Social Welfare',
            'name'         => 'required|string|max:255',
            'description'  => 'nullable|string',
            'contact'      => 'nullable|string|max:255',
        ];
    }
}
