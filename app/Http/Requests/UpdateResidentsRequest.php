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
            'first_name'        => 'required|string|max:255',
            'middle_name'       => 'nullable|string|max:255',
            'last_name'         => 'required|string|max:255',
            'suffix'            => 'nullable|string|max:50',
            'email_address'     => 'nullable|email|max:255',
            'birthdate'         => 'required|date',
            'gender'            => 'required|in:Male,Female,LGBTQ+',
            'civil_status'      => 'required|string',
            'education_level'   => 'required|in:Primary,Lower_Secondary,Upper_Secondary,College,Vocational,No_Education',
            'occupation'        => 'required|in:IT,Agriculture,Business,Government,Unemployed',
            'contact_number'    => 'nullable|string|max:20',
            'address'           => 'required|string',
            'registration_year' => 'required|integer',
            'religion'          => 'required|in:Roman Catholic,Iglesia ni Cristo,Muslim,Buddhist,Others',
            'philhealth_id'     => 'nullable|string',
            'sss'               => 'nullable|string',
            'pagibig_id'        => 'nullable|string',
            'voter_status'      => 'required|in:Registered,Unregistered',
            'voter_id'          => 'nullable|string',
            'household_id'      => 'nullable|integer',
        ];
    }
}
