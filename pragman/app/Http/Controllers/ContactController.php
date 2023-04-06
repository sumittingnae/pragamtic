<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    //
     function contact(Request $req){
        $contact=new Contact();
        $contact->name=$req->input('name');
        $contact->email=$req->input('email');
        $contact->mobile=$req->input('mobile');
        $contact->description=$req->input('description');
        $contact->file_path=$req->file('file')->store('contacts');
        $contact->save();

        return $contact;
}
}