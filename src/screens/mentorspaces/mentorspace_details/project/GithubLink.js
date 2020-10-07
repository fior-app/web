import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Divider } from 'semantic-ui-react';
import Axios from 'axios';

import * as styles from './../../../../styles/mentorspace-project.module.css';
import { Link } from 'react-router-dom';

export class GithubLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: null,
    };
    this.loadData(props.link);
  }

  loadData = (link) => {
    Axios.get(`https://api.github.com/repos/${link.owner}/${link.repository}`, {
      headers: { Authorization: '' },
    })
      .then((res) => this.setState({ data: res.data, loading: false }))
      .catch((error) =>
        this.setState({ error: error.message, loading: false })
      );
  };

  render() {
    const { loading, error, data } = this.state;
    return (
      <div className={styles.github_link_card}>
        {loading ? <div>Loading</div> : null}
        {error ? <div>{error}</div> : null}
        {data ? (
          <div>
            <div className={styles.title}>
              <Image
                src={data.owner.avatar_url}
                circular
                className={styles.image}
              />
              {data.full_name}
            </div>
            <Divider />
            <div className={styles.description}>{data.description}</div>
            <a href={data.html_url + '/issues'}>
              <div className={styles.open_issues}>
                {data.open_issues} open issues found
              </div>
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GithubLink);
