import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import TeacherService from '../../services/TeacherService'

const AddTeacher = () => {
    const [teacher, setTeacher] = useState({
        teacherName: "",
        teacherAddress: "",
        teacherSubject: "",
        teacherUsername: ""
    }
    );

    const handleInputChange = (e) => {
        const value = e.target.value;
        setTeacher({ ...teacher, [e.target.name]: value });
    }

    const [msg, setMsg] = useState();

    const registerTeacher = (e) => {
        e.preventDefault();
        TeacherService.addTeacher(teacher).then((res) => {
            setMsg("Teacher registered Sucessfully");
        }).catch(err => {
            console.log(err);
        })

    }
    const handleReset = () => {
        setTeacher({
            teacherName: "",
            teacherAddress: "",
            teacherSubject: "",
            teacherUsername: ""
        })
    }

    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card shadow">
                            <div className="card-header fs-3 text-center"> Add Teacher</div>
                            {
                                msg && <p className='fs-4 text-center text-success'>{msg}</p>
                            }
                            <div className="card-body">
                                <Form onSubmit={(e) => registerTeacher(e)}>
                                    <FormGroup>
                                        <Label for="exampleName">
                                            Teacher Name
                                        </Label>
                                        <Input
                                            id="exampleName"
                                            name="teacherName"
                                            placeholder="write Name"
                                            type="text"
                                            value={teacher.teacherName}
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAddress">
                                            Teacher Address
                                        </Label>
                                        <Input
                                            id="exampleAddress"
                                            name="teacherAddress"
                                            placeholder="write Address"
                                            type="text"
                                            value={teacher.teacherAddress}
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleSubject">
                                            Teacher Subject
                                        </Label>
                                        <Input
                                            id="exampleSubject"
                                            name="teacherSubject"
                                            placeholder="write Subject"
                                            type="text"
                                            value={teacher.teacherSubject}
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Username
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="teacherUsername"
                                            placeholder="write your username"
                                            type="email"
                                            value={teacher.teacherUsername}
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </FormGroup>

                                    <Button className='btn btn-info text-dark'>
                                        Submit
                                    </Button>

                                    <Button type='reset' className='ms-2 btn btn-danger' onClick={handleReset}>
                                        Reset
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTeacher