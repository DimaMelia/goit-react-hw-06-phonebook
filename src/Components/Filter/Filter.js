import { connect } from 'react-redux';
import s from './Filter.module.css';
import phoneActions from '../../redux/phone-actions';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

const mapStateToProps = (state) => ({
  value: state.phonebook.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(phoneActions.findContacts(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
