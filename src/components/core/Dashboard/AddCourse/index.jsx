import RenderSteps from "./RenderSteps"


export default function AddCourse(){
    return (
        <>
            <div className="text-white">
                <div>
                    <h1>Add Course</h1>
                    <div>
                        <RenderSteps/>
                    </div>
                </div>
                <div>
                    <p>Code Upload Tips</p>
                    <ul>
                        <li>Set the course price option or make it free</li>
                        <li>Standard Size for the course thumbnail is 1024x576</li>
                        <li>Video Section controls the course overview video</li>
                        <li>Set the course price option or make it free</li>
                        <li>Standard Size for the course thumbnail is 1024x576</li>
                        <li>Video Section controls the course overview video</li>
                        <li>Set the course price option or make it free</li>
                        <li>Standard Size for the course thumbnail is 1024x576</li>
                    </ul>
                </div>
            </div>
        </>
    )
}