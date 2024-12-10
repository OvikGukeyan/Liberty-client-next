import $api from "../http";
import { TFormAplicationValues } from "../schemas/aplicationSchema";
import { TFormContactValues } from "../schemas/contactFormSchema";


export default class formService {
    static async sendAplicationForm(values: TFormAplicationValues) {
        const formData = new FormData();
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("email", values.email);
        formData.append("phoneNumber", values.phoneNumber);
        formData.append("description", values.description || "");
        formData.append("communicationMethod", values.communicationMethod);
        formData.append("check", values.check.toString());
        if (values.cv) {
            formData.append("cv", values.cv);
        }
        const response = await $api.post(
            `${process.env.NEXT_PUBLIC_API_URL}/job`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    };

    static async sendContactForm(values: TFormContactValues) {
        console.log(values);
        return $api.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, values);
    }
}