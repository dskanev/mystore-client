import * as projectService from '../../../services/projectService';

const CreateCommentForm = ({
    projectId
}) => {
    const onCommentSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let text = formData.get('text');

        projectService.postComment({
            text,
            projectId            
        }).then(() => {
            window.location.reload(false);
        })
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onCommentSubmit} method="POST">
                <fieldset>
                    <legend>Post a comment</legend>
                    
                    <p className="field">
                        <label htmlFor="text">Text</label>
                        <span className="input">
                            <input type="text" name="text" id="text"/>
                        </span>
                    </p>                    
                    
                    <input className="button submit" type="submit" value="Post a comment" />
                </fieldset>
            </form>
        </section>
    );
}

export default CreateCommentForm;