<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('business', function(Blueprint $table) {
            $table->id();
            $table->string('business_name');
            $table->string('industry_type');
            $table->integer('employee_count')->default(0);
            $table->date('established_date');
            $table->string('status')->default('active');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('business');
    }
};
