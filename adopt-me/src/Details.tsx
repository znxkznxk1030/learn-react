import React, { lazy } from "react";
import pet, { Photo } from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundry";
import { useHistory } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { navigate } from "@reach/router";

const Modal = lazy(() => import("./Modal"));
interface RouteParams { id: string }
class Details extends React.Component<RouteComponentProps<RouteParams>> {
  public state = {
    loading: true,
    showModal: false,
    name: "",
    animal: "",
    location: "",
    description: "",
    media: [] as Photo[],
    url: "",
    breed: "",
  };

  public componentDidMount() {
    console.log(this.props);

    if (!this.props.match.params.id) {
      navigate("/");
      return;
    }
    // throw new Error();
    pet
      .animal(+this.props.match.params.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city},
        ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }

  public toggleModal = () =>
    this.setState({ showModal: !this.state.showModal });
  public adopt = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    history.push(this.state.url);
  };

  public render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div onClick={console.log}>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          {/* <ThemeContext.Consumer> */}
          {/* {(themeHook) => { */}
          <button
            style={{ backgroundColor: "blue" }}
            onClick={this.toggleModal}
          >
            Adopt {name}
          </button>
          ;{/* }} */}
          {/* </ThemeContext.Consumer> */}
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No, I'm a monster</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props: RouteComponentProps<RouteParams>) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
