<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCommunityEngagementRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
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
            'title' => 'required|string|max:255',
            'activity_type' => 'required|in:Survey,Workshop,Meeting,Feedback,Volunteer',
            'description' => 'nullable|string',
            'event_date' => 'required|date',
            'time' => 'nullable|date_format:H:i',
            'resident_id' => 'nullable|exists:residents,id',
        ];
    }
}
