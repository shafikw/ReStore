
import { useNavigate } from "react-router-dom";

export default function GetError() {
    const navigate = useNavigate();
    navigate("/server-error");
    return null;
}