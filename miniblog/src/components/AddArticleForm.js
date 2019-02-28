import React from 'react';

class AddArticleForm extends React.Component{
  createArticle(event){
    event.preventDefault();
    console.log('Making articles');
    const article = {
      title: this.title.value,
      content: this.content.value,
    }
  }
  render(){
    return(
      <form className="article-edit" onSubmit={(e) => this.createArticle(e)}>
        <input ref={(input) => this.title = input} type="text" placeholder="Article title" />
        <textarea ref={(input) => this.content = input} placeholder="Article content"></textarea>
        <button type="submit" className="btn--primary">+ Add article</button>
      </form>
    )
  }
}
export default AddArticleForm;
