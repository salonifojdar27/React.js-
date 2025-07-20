
import { useFormik } from 'formik';
import { object, string, number } from 'yup';

const initialValues = {
    Name: "",
    Email: "",
    Password: "",
    profession: "",
    Gender: "",
}

const StudentFormSchema = object({
    Name: string().required("Name must be filled"),
    Email: string().email("Invalid email format").required("Email must be filled"),
    Password: number().integer().min(6, "Password must be at least 6 characters").required("Password must be filled"),
    profession: string().required("Must Select your profession"),
    Gender: string().required("Please select your gender"),
});

function StudentForm() {
    const formik = useFormik({
        initialValues,
        validationSchema: StudentFormSchema,
        onSubmit: (values) => {
            console.log(values)
            formik.resetForm();
        },
    });


    return (
        <div>
            <h1>Students Form 📝</h1>
            <div className="container">
                <form action="" className="form" onSubmit={formik.handleSubmit}>
                    <input type="text" className="Name" value={formik.values.Name} name="Name" onChange={formik.handleChange} placeholder="Name" />
                    {formik.touched.Name && formik.errors.Name && <p>{formik.errors.Name}</p>}
                    <input type="email" className="email" value={formik.values.Email} name="Email" onChange={formik.handleChange} placeholder="Email" />
                    {formik.touched.Email && formik.errors.Email && <p>{formik.errors.Email}</p>}
                    <input type="password" className="password" value={formik.values.Password} name="Password" onChange={formik.handleChange} placeholder="Password" />
                    {formik.touched.Password && formik.errors.Password && <p>{formik.errors.Password}</p>}
                    <select name="profession" value={formik.values.profession} id="" onChange={formik.handleChange}>
                        <option value="">Select profession</option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
                    {formik.touched.profession && formik.errors.profession && <p>{formik.errors.profession}</p>}
                    <h3>Select your Gender :</h3>
                    <div className="gender-group">
                        <input type="radio" name="Gender" value="Male" checked={formik.values.Gender === "Male"} onChange={formik.handleChange} />
                        <label htmlFor="Male">Male</label>
                        <input type="radio" name="Gender" value="Female" checked={formik.values.Gender === "Female"} onChange={formik.handleChange} />
                        <label htmlFor="Female">Female</label>
                        <input type="radio" name="Gender" value="Other" checked={formik.values.Gender === "Other"} onChange={formik.handleChange} />
                        <label htmlFor="Other">Other</label>
                    </div>
                    {formik.touched.Gender && formik.errors.Gender && <p>{formik.errors.Gender}</p>}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default StudentForm  