<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateResidentsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Allow update if the user is permitted (adjust as needed)
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
                'first_name' => 'required|string|max:255',
                'middle_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'suffix' => 'nullable|string|max:10',
                'gender' => 'required|string',
                'birthdate' => 'required|date',
                'civil_status' => 'required|string|max:50',
                'religion' => 'required|string|max:100',
                'education_level' => 'required|string|max:100',
                'occupation' => 'required|string|max:100',
                'contact_number' => 'nullable|string|size:11|regex:/^09\d+$/',
                'email_address' => 'nullable|email|max:255',
                'address' => 'required|string|max:255',
                'household_id' => 'nullable|integer',
                'voter_id' => 'nullable|required_if:voter_status,Registered|string|max:50',
                'voter_status' => 'nullable|string|max:50',
                'sss' => 'nullable|string|max:20',
                'philhealth_id' => 'nullable|string|max:20',
                'pagibig_id' => 'nullable|string|max:20',
                'registration_year' => 'required|integer',

                'avatar' => 'nullable',
        ];
    }
}
