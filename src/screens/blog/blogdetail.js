import React, { Component } from 'react';
import SideNav from '../../components/sidenav/sidenav_cmp';
class Blogdetail extends Component {
  state = {}
  render() {
    return (
      <div className='container'>
        <SideNav />
        <div>
          <p className='blog_post_title'>Post title</p>
          <img className='blog_view_image' src='../../assets/vectors/blogviewicon.svg' />
          <p className='blog_content_detail'>Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
          sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

        </div>
        <div className="blog_right_row">
          <div className='blog_view'>
            <div className='blog_view_catergory_title'>
              <p>Related catergories</p>
              <div className='catergory_type_group'>
                <div className='blg_view_catergory_type_box1'>
                  <p className="blog_view_catergory_name">Catergory type </p>
                </div>
              </div>
            </div>

            <div className='blog_view_resent_posts'>
              <p className='blog_view_resent_title'>Resent posts</p>
              <div className='blog_view_resent_box'>
                <div className='blog_view_resent_detail'>
                  <p>Post Title : Amet minim mollit non deserunt ullamco</p>
                </div>
              </div>

            </div>
          </div>

        </div>


      </div>
    );
  }
}



export default Blogdetail;