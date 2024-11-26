import { FormValues } from "@/components/ApplicationForm";
import $api from "../http";


export default class formService {
    static async sendAplicationForm(values: FormValues) {
        const formData = new FormData();
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("emailAddress", values.emailAddress);
        formData.append("phoneNumber", values.phoneNumber);
        formData.append("description", values.description);
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

    sendContactForm(values: FormValues) {
        
    }
}