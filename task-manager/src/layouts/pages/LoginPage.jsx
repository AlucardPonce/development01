import { Form, Input, Button, Card, Typography, message } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(""); // Para manejar el error global del formulario
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    setFormError(""); // Limpiar el error al intentar iniciar sesión

    setTimeout(() => {
      // Verificar las credenciales: nombre de usuario y contraseña
      if (values.username === "admin" && values.password === "123456") {
        message.success("Inicio de sesión exitoso");
        navigate("/dashboard");
      } else {
        setFormError("Credenciales incorrectas"); // Establecer el error si las credenciales son incorrectas
      }
      setLoading(false);
    }, 1000);
  };

  // Asegurarse de que el body y html no tengan márgenes o paddings
  useEffect(() => {
    document.body.style.margin = "0";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }, []);

  return (
    <div style={styles.container}>
      <Card style={styles.card} bordered={false}>
        <Title level={2} style={{ textAlign: "center", color: "#333" }}>
          Iniciar Sesión
        </Title>
        
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Usuario"
            name="username"
            rules={[{ required: true, message: "Por favor, ingrese su usuario" }]}
            validateStatus={formError ? "error" : ""}
            help={formError && formError}
          >
            <Input placeholder="Usuario" />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              { required: true, message: "Ingrese su contraseña" },
              { min: 6, message: "Debe tener al menos 6 caracteres" },
            ]}
            validateStatus={formError ? "error" : ""}
            help={formError && formError}
          >
            <Input.Password placeholder="Contraseña" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              style={styles.button}
            >
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh", // Asegurarse que el contenedor ocupe toda la altura de la ventana
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)", // Fondo de gradiente
  },
  card: {
    width: 380,
    padding: 20,
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    background: "#fff",
  },
  button: {
    backgroundColor: "#1890ff",
    borderColor: "#1890ff",
    fontSize: "16px",
  },
  errorMessage: {
    color: "#f5222d",
    marginBottom: "10px",
    fontSize: "14px",
    textAlign: "center",
  },
};

export default LoginPage;
