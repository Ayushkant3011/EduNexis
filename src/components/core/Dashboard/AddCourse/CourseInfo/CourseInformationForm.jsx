import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import RequirementField from './RequirementField';
import IconBtn from '../../../../common/IconBtn';

const CourseInformationForm = () => {
    
    const {
        register,
        handleSubmit,
        setValue,
        getValue,
        formState:{errors}
    } = useForm();
    
    const dispatch = useDispatch();
    const {course, editCourse} = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);
    const [coursecategories, setCourseCategories] = useState([]);

    useEffect(() =>{
        const getCategories = async () =>{
            setLoading(true);
            const categories = await fetchCourseCategories();
            if(categories.length > 0){
                setCourseCategories(categories);
            }
            setLoading(false);
        }

        if(editCourse){
            setValue("CourseTitle", course.courseName);
            setValue("CourseShortDesc", course.courseDescription);
            setValue("CoursePrice", course.price);
            setValue("CourseTags", course.tag);
            setValue("CourseBenefits", course.whatYouWillLearn);
            setValue("CourseCategory", course.category);
            setValue("CourseRequirements", course.instructions);
            setValue("CourseImage", course.thumbnail);
        }

        getCategories();
    },[]);

    const isFormUpdated = () =>{
        const currentValues = getValue();
        if(currentValues.courseTitle !== course.courseName || 
            currentValues.courseShortDesc !== course.courseDescription ||
            currentValues.coursePrice !== course.coursePrice ||
            currentValues.courseTitle !== course.courseName || 
            currentValues.courseBenefits !== course.whatYouWillLearn ||
            currentValues.coursecategory !== course.category._id ||
            currentValues.courseRequirements.toString() !== course.instructions.toString() )

            return true;
        
        else
            return false;

    }

    const onSubmit = async(data) =>{
        if(editCourse){
            const currentValues = getValue();
            const formData = new formData();

            formData.append("courseId", course._id);
            if(currentValues.courseTitle !== course.courseName){
                formData.append("courseName", data.courseTitle);
            }

            if(currentValues.courseshortDesc !== course.courseName){
                formData.append("courseName", data.courseTitle);
            }

            if(currentValues.courseTitle !== course.courseName){
                formData.append("courseName", data.courseTitle);
            }

            if(currentValues.courseTitle !== course.courseName){
                formData.append("courseName", data.courseTitle);
            }

            if(currentValues.courseTitle !== course.courseName){
                formData.append("courseName", data.courseTitle);
            }

            if(currentValues.courseTitle !== course.courseName){
                formData.append("courseName", data.courseTitle);
            }

            if(currentValues.courseTitle !== course.courseName){
                formData.append("courseName", data.courseTitle);
            }
        }
    }

    return (
        <form
        onSubmit={handleSubmit(onSubmit)}
        className='rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8'
        >
            <div>
                <label htmlFor='courseTitle'>Course title<sup>*</sup></label>
                <input
                    id='courseTitle'
                    placeholder='Enter Course Title'
                    {...register("courseTitle", {required:true})}
                    className='w-full'
                />
                {
                    errors.courseTitle &&(
                        <span>Course Title is Required</span>
                    )
                }
            </div>

            <div>
                <label htmlFor='courseShortDesc'>Course Short Description<sup>*</sup></label>
                <textarea
                    id='courseShotDesc'
                    placeholder='Enter Description'
                    {...register("courseShortDesc", {required:true})}
                    className='min-h-[140px] w-full'
                />
                {
                    errors.courseShortDesc &&(
                        <span>Course Description is Required<sup>**</sup></span>
                    )
                }
            </div>

            <div className='relative'>
                <label htmlFor='coursePrice'>Course Price<sup>*</sup></label>
                <input
                    id='coursePrice'
                    placeholder='Enter Course Price'
                    {...register("coursePrice", {
                        required:true,
                        valueAsNumber:true
                        })}
                    className='w-full'
                />
                <HiOutlineCurrencyRupee className='absolute top-1/2 text-richblack-400'/>
                {
                    errors.coursePrice &&(
                        <span>Course Price is Required</span>
                    )
                }
            </div>

            <div>
                <label htmlFor='courseCategory'>Course Category <sup>*</sup></label>
                <select
                id='courseCategory'
                defaultValue=""
                {...register("courseCategory",{required:true})}
                >

                    <option value="" disabled>Choose a Category</option>

                    {
                        !loading && coursecategories.map((category, index) =>(
                            <option key={index} value={category?._id}>
                                {category?.name}
                            </option>
                        ))
                    }
                </select>
                {errors.coursecategory && (
                    <span>Course Category is Required <sup>**</sup></span>
                )}
            </div>

            {/* Create A Custom component for handling tags input */}
            <ChipInput
                label="Tags"
                name="courseTags"
                placeholder="Enter Tags and press enter"
                register={register}
                errors={errors}
                setValue={setValue}
                getValue = {getValue}
            />

            {/* Create a component for uploading and showing preview of image */}
            <Upload
                name=
                label=
                register={}

            />

            {/* Benefits of the Course */}
            <div>
                <label>Benefits of the Course<sup>*</sup></label>
                <textarea
                    id='courseBenefits'
                    placeholder='Enter Benefits for the course'
                    {...register("courseBenefits", {required:true})}
                    className='min-h-[130px] w-full'
                />
                {
                    errors.courseBenefits && (
                        <span>
                            Benefits of the Course is Required<sup>**</sup>
                        </span>
                    )
                }
            </div>

            <RequirementField
                name="courseRequirements"
                label="Requirements/Instructions"
                register={register}
                errors={errors}
                setValue = {setValue}
                getValue={getValue}
            />

            <div>
                {
                    editCourse && (
                        <button
                        onClick={() => dispatch(setStep(2))}
                        className='flex items-center gap-x-2 bg-richblack-300'>
                            Continue Without Saving
                        </button>
                    )
                }

                <IconBtn
                    text={!editCourse ? "Next" : "Save Changes"}
                />
            </div>
        </form>
  );
}

export default CourseInformationForm;
