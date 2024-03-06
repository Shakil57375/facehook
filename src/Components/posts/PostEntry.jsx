import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxios from "../../hooks/useAxios/useAxios";
import { usePost } from "../../hooks/usePost/usePost";
import useProfile from "../../hooks/useProfile/useProfile";

const PostEntry = ({ onCreate }) => {
    const { auth } = useAuth();
    const { dispatch } = usePost();
    const { api } = useAxios();
    const { state: profile } = useProfile();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const handlePostSubmit = (formData) =>{
        console.log(formData)
    }

    return (
        <div className="card relative">
            <h6 className="mb-3 text-center text-lg font-bold lg:text-xl">
                Create Post
            </h6>
            <form onSubmit={handleSubmit(handlePostSubmit)}>

            </form>
        </div>
    );
};

export default PostEntry;
