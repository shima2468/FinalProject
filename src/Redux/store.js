import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './ProductSlice'
// (1)
// الستور فيه كل الستيت وكل الداتا الي مفروض اشيرها ع البروجكت كله
// فأكيد الستور لازم كل البروجكت عندي يكون شايفه
// فبدي اعمله اكسبورت عشان اروح اعمله راب ع كل المشروع 
// هلقيت دعمله راب ع كل الابليكشن عندي شغله اسمها بروفايدر
// وعنده بروب اسمه ستور هعمله باس للستور تاعنا 

// (3)
// الستور ما برمي فيه الداتا عطوول 
// فبدي اعمل سلايز للبرودكت 
export let store=configureStore({
    // اهم حاجه هتكون فيه هيا الريدوسر 
    reducer:{
        //reducer name..................
        // (8)
        // بدون ما احط هان اسم هيجبلي ايرور عباره عن انو نت هاف فالد ريديوسر
        // اسم الريدوسر هوا البرودكت ريدوسر 
        productReducer:productReducer
        // كدا تمام وكل حاجه اشتغلت 
        // (9).................
        // عندي انيشل فاليو للكاونتر بعشرين بدي كل الابلكيشن عندي يشوفها
    }
})