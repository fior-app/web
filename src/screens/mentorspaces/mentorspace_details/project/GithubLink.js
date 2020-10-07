import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Divider, Card, Icon } from 'semantic-ui-react';
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
      contributors: null,
      contributorsLoading: null,
      contributorsError: null,
    };
    this.loadData(props.link);
    this.loadContributors(props.link);
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

  loadContributors = (link) => {
    Axios.get(
      `https://api.github.com/repos/${link.owner}/${link.repository}/contributors`,
      {
        headers: { Authorization: '' },
      }
    )
      .then((res) =>
        this.setState({ contributors: res.data, contributorsLoading: false })
      )
      .catch((error) =>
        this.setState({
          contributorsError: error.message,
          contributorsLoading: false,
        })
      );
  };

  render() {
    const {
      loading,
      error,
      data,
      contributors,
      contributorsError,
      contributorsLoading,
    } = this.state;
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
        <Divider />
        {contributorsLoading ? <div>Loading Contributors</div> : null}
        {contributorsError ? <div>{error}</div> : null}

        {contributors ? (
          <Card.Group>
            {contributors.map((contributor) => (
              <Card>
                <Image src={contributor.avatar_url} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{contributor.login}</Card.Header>
                  {/* <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description> */}
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    {contributor.contributions} Contributions to repository
                  </a>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GithubLink);
