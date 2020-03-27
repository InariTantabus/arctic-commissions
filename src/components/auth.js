import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

import "../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../node_modules/dropzone/dist/min/dropzone.min.css";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: "",
      loggedInStatus: 'NOT_LOGGED_IN',
      newFileStatus: false,
      examples: [],
      thumb_image: '',
      apiUrl: "https://arcticsoul.devcamp.space/portfolio/portfolio_items",
      apiAction: "post",
      editItem: -1,
      editMode: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.getExampleItems = this.getExampleItems.bind(this);
    this.handleNewFileClick = this.handleNewFileClick.bind(this);
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.buildForm = this.buildForm.bind(this);
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);

    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
  }
  
  handleEditClick(example) {
    this.setState({
      editItem: example.id,
      apiUrl: `https://arcticsoul.devcamp.space/portfolio/portfolio_items/${example.id}`,
      apiAction: 'patch',
      editMode: true
    })
  }

  handleDeleteClick(example) {
    axios
      .delete(`https://api.devcamp.space/portfolio/portfolio_items/${example.id}`, { withCredentials: true })
      .then(response => {
        this.setState({
          examples: this.state.examples.filter(item => {
            return item.id !== example.id
          })
        })

        return response.data;
      })
      .catch(error => {
        console.log('handleDeleteClick error', error)
      })
  }

  buildForm() {
    let formData = new FormData();

    if (this.state.thumb_image) {
      formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
    }

    return formData;
  }

  handleImageSubmit(event) {
    axios
      ({
        method: this.state.apiAction,
        url: this.state.apiUrl,
        data: this.buildForm(),
        withCredentials: true
      })
      .then(response => {
        if (this.state.editMode) {
          this.getExampleItems()
          this.setState({
            apiUrl: "https://arcticsoul.devcamp.space/portfolio/portfolio_items",
            apiAction: "post",
            editItem: -1,
            editMode: false
          })
        } else {
          this.setState({
            examples: [response.data.portfolio_item].concat(this.state.examples)
          })
        }
      })
      .catch(error => {
        console.log("portfolio form handleSubmit error", error);
      });

      this.setState({ newFileStatus: false })

    event.preventDefault();
  }

  handleThumbDrop() {
    return {
      addedfile: file => this.setState({ thumb_image: file })
    }
  }

  handleNewFileClick() {
    this.setState({
      newFileStatus: true
    })
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    }
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    }
  }

  handleSignOut() {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          this.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch(error => {
        console.log("Error signing out", error);
      });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
    axios
      .post(
        "https://api.devcamp.space/sessions",
        {
          client: {
            email: this.state.email,
            password: this.state.password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.handleSuccessfulLogin();
        } else {
          this.setState({
            errorText: "Wrong email or password"
          });
          this.handleUnsuccessfulLogin();
        }
      })
      .catch(error => {
        this.setState({
          errorText: "An error occurred"
        });
        this.handleUnsuccessfulLogin();
      });

    event.preventDefault();
  }

  componentDidMount() {
    this.getExampleItems();
  }

  getExampleItems() {
    axios
      .get('https://arcticsoul.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc')
      .then(response => {
        this.setState({
          examples: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='auth'>
        { this.state.loggedInStatus === 'LOGGED_IN' ?
        (<div className='auth__logged-in'>
          <div className='auth__logged-in__endcard'>
            <a onClick={this.handleSuccessfulLogout} className='auth__logged-in__endcard__logout'>
                Logout
              </a>
          </div>

          <div className='auth__logged-in__endcard'>
            {this.state.newFileStatus ? 
              (<div>
                <DropzoneComponent
                  config={this.componentConfig()}
                  djsConfig={this.djsConfig()}
                  eventHandlers={this.handleThumbDrop()}
                />

                <a onClick={this.handleImageSubmit} className='auth__logged-in__endcard__submit'>
                  Submit
                </a>
              </div>)

              :

              (<a onClick={this.handleNewFileClick} className='auth__logged-in__endcard__new'>
                <i className='fas fa-plus-circle' />
              </a>)
            }
          </div>

          {
            this.state.examples.map((example, index) => {
              return (
                <div key={example.id}>
                  {
                    this.state.editItem == example.id ? 
                    (
                      <div>
                        <DropzoneComponent 
                          config={this.componentConfig()}
                          djsConfig={this.djsConfig()}
                          eventHandlers={this.handleThumbDrop()}
                        />

                        <a onClick={this.handleImageSubmit} className='auth__logged-in__endcard__submit'>
                          Submit
                        </a>
                      </div>
                    ) 


                    : 


                    (<div
                      className={`
                        ${this.state.active == index ? 'active' : ''}
                        auth__logged-in__image
                      `}
                    >
                      <a onClick={() => this.handleDeleteClick(example)} className='auth__logged-in__image__trash'>
                        <i className='fas fa-trash' />
                      </a>
    
                      <a onClick={() => this.handleEditClick(example)} className='auth__logged-in__image__edit'>
                        <i className='fas fa-edit' />
                      </a>
    
                      <img src={`${example.thumb_image_url}`} />
                    </div>)
                  }
                </div>
              )
            })
          }
        </div>)




        :



        
        (<div className='auth__logged-out'>
          <h1>LOGIN TO EDIT EXAMPLES</h1>

          <div>{this.state.errorText}</div>

          <form onSubmit={this.handleSubmit} className="auth__logged-out__form">
            <div className="auth__logged-out__form__group">
              <i className='fas fa-envelope' />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="auth__logged-out__form__group">
              <i className='fas fa-lock' />
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="auth__logged-out__form__button">
              <button type="submit" className="btn">Login</button>
            </div>
          </form>
        </div>)
        }
      </div>
    );
  }
}

export default Auth;