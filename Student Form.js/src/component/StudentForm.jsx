
import { useFormik } from 'formik';
import { object, string, number } from 'yup';

const initialValues = {
    Name: "",
    Email: "",
    Password: "",
    SelectGrade: "",
    Gender:"",
}

const StudentFormSchema = object({
    Name: string().required("Name must be filled"),
    Email: string().email().required("Email must be filled"),
    Password: number().required().positive().integer().required("Password must be filled"),
    SelectGrade: string().required("Must Select your grade"),
})

function StudentForm() {
    const formik = useFormik({
        initialValues, validationSchema: StudentFormSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });


    return (
        <div>
            <h1>Students Form</h1>
            <div className="container">
                <form action="" className="form" onSubmit={formik.handleSubmit}>
                    <input type="text" className="Name" value={formik.values.Name} name="Name" onChange={formik.handleChange} placeholder="Name" />
                    <input type="email" className="email" value={formik.values.Email} name="Email" onChange={formik.handleChange} placeholder="Email" />
                    <input type="password" className="password" value={formik.values.Password} name="Password" onChange={formik.handleChange} placeholder="Password" />
                    <select name="SelectGrade" value={formik.values.SelectGrade} id="" onChange={formik.handleChange}>
                        <option value="">Select Grade</option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
                    <p>Select your Gender:</p>
                    <div className="gender-group" name="Gender"  value={formik.values.Gender} onChange={formik.handleChange}>
                        <input type="radio" name="gender" value="Male" checked={formik.values.Gender} onChange={formik.handleChange} />
                        <label htmlFor="Male">Male</label>
                        <input type="radio" name="gender" value="Female" checked={formik.values.Gender} onChange={formik.handleChange} />
                        <label htmlFor="Female">Female</label>
                        <input type="radio" name="gender" value="other" checked={formik.values.Gender} onChange={formik.handleChange} />
                        <label htmlFor="Other">Other</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default StudentForm  