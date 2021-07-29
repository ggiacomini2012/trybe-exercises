import React from 'react';
// https://stackoverflow.com/questions/45692537/proptypes-is-not-defined
// Para resolver PropTypes is nor defined:
// npm install --save prop-types
import PropTypes from 'prop-types';
import Input from '../../../projetos/sd-013-b-project-movie-cards-library-stateful/src/components/Input';
import InputNumber from '../../../projetos/sd-013-b-project-movie-cards-library-stateful/src/components/InputNumber';
import Textarea from '../../../projetos/sd-013-b-project-movie-cards-library-stateful/src/components/Textarea';
import SelectGender from '../../../projetos/sd-013-b-project-movie-cards-library-stateful/src/components/SelectGender';
import Button from '../../../projetos/sd-013-b-project-movie-cards-library-stateful/src/components/Button';

class InnerAddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onChange = this.onChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    });
    // console.log(name);
    // console.log(event.target.value);
  }

  onChange() {
    const {
      onClick,
    } = this.props;
    this.setState((state) => {
      onClick(state);
      return {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      };
    });
  }

  render() {
    const {
      onClick,
    } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <Input
          id="title-input"
          labelTest="title-input-label"
          label="Título"
          name="title"
          value={ title }
          onChange={ this.handleOnChange }
        />
        <Input
          id="subtitle-input"
          labelTest="subtitle-input-label"
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleOnChange }
        />
        <Input
          id="image-input"
          labelTest="image-input-label"
          label="Imagem"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleOnChange }
        />
        <Textarea
          id="storyline-input"
          labelTest="storyline-input-label"
          label="Sinopse"
          value={ storyline }
          name="storyline"
          onChange={ this.handleOnChange }
        />
        <InputNumber
          id="rating-input"
          labelTest="rating-input-label"
          label="Avaliação"
          value={ rating }
          onChange={ this.handleOnChange }
          name="rating"
        />
        <SelectGender
          selectedGenre={ genre }
          onSelectedGenreChange={ this.handleOnChange }
        />
        <Button onClick={ this.onChange } />
      </div>
    );
  }
}

InnerAddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default InnerAddMovie;
