import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const initialValues = {
  fullName: '',
  email: '', 
  departmant: '',
  unvan: '',
  gorevler: '',
};
export default function FormContainer(props) {
  const { addUser } = props;
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newState = { ...formData, [name]: value };
    setFormData(newState);
  };

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form verisi:', formData);

    addUser(formData); // sadece bu
    setFormData(initialValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="fullName">Ad Soyad:</Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="çalışanın tam adı ve soyadı"
          type="text"
          onChange={handleChange}
          value={formData.fullName}
        />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email: </Label>
        <Input
          id="email"
          name="email"
          placeholder="kurumsal email adresi"
          type="email"
          onChange={handleChange}
          value={formData.email}
        />
      </FormGroup>

      <FormGroup>
        <Label for="departmant">Departman: </Label>
        <Input
          id="departmant"
          name="departmant"
          placeholder="çalıştığı departman"
          type="text"
          onChange={handleChange}
          value={formData.departmant}
        />
      </FormGroup>

      <FormGroup>
        <Label for="unvan">Ünvan: </Label>
        <Input
          id="unvan"
          name="unvan"
          placeholder="Çalışanaın ünvanı"
          type="text"
          onChange={handleChange}
          value={formData.unvan}
        />
      </FormGroup>

      <FormGroup>
        <Label for="gorevler">Takım içi görevleri: </Label>
        <Input
          id="gorevler"
          name="gorevler"
          placeholder="Çalışanaın takım içindeki görev listesi"
          type="textarea"
          rows="8"
          onChange={handleChange}
          value={formData.gorevler}
        />
      </FormGroup>

      <FormGroup className="text-center">
        <Button>Kaydet</Button>
      </FormGroup>
    </Form>
  );
}
