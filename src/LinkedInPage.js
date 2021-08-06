import axios from "axios";
import React, {Component} from "react";

import {LinkedIn} from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

class LinkedInPage extends Component {
  state = {
    code: "",
    errorMessage: "",
    client_id: "78l6zz843wr43t",
    client_secret: "gniGBxx3klDlAAZG",
  };

  handleSuccess = data => {
    this.setState({
      code: data.code,
      errorMessage: "",
    });

    this.fetchToken(data);
  };
  fetchToken(data) {
    axios
      .post(
        `https://www.linkedin.com/oauth/v2/accessToken?client_id=${this.client_id}&client_secret=${this.client_secret}&grant_type=authorization_code&redirect_uri=https://flamboyant-pare-c16a8b.netlify.app/linkedin&code=${data.code}`,
        // `https://www.linkedin.com/oauth/v2/accessToken?client_id=${this.client_id}&client_secret=${this.client_secret}&grant_type=authorization_code&redirect_uri=https://localhost:3001/linkedin&code=${data.code}`,
        
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Cookie:
              'bcookie="v=2&f1c54d60-429d-42ab-8a91-e068f0d5c4a9"; lang=v=2&lang=en-us; lidc="b=OB49:s=O:r=O:a=O:p=O:g=2749:u=22:x=1:i=1627969915:t=1628052910:v=2:sig=AQHlXeIQ_f4ckAGnGVNOTtiBtuTnfO3-"; bscookie="v=1&2021080305331961b11b51-f8ab-4671-8a3f-6b457114e267AQHQyLfgtJTfY0soFkePvHUNXc4COCrA"',
            "Content-Length": "0",
            // "User-Agent": "PostmanRuntime/7.28.3",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
            "Access-Control-Allow-Header": "Authorization",
            "Content-Type": "application/x-www-form-urlencoded"
          },
        }
      )
      .then(function (response) {
        console.log(response);
        this.fetchData(response.code);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  fetchData(auth) {
    console.log(auth);
    alert(auth);
  }

  handleFailure = error => {
    this.setState({
      code: "",
      errorMessage: error.errorMessage,
    });
    console.log(error.errorMessage);
  };

  render() {
    const {code, errorMessage} = this.state;
    return (
      <div>
        <LinkedIn
          clientId="78l6zz843wr43t"
          // redirectUri="https://localhost:3001/linkedin"
          redirectUri="https://flamboyant-pare-c16a8b.netlify.app/linkedin"
          scope="r_emailaddress,r_liteprofile"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          supportIE
          redirectPath="/linkedin"
        >
          <img
            src={linkedin}
            alt="Log in with Linked In"
            style={{maxWidth: "180px"}}
          />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;
