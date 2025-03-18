import GridPastry from "../../components/GridPastry"
import { useGetAllPastryQuery } from "../../store/slice/crudSlice"

import Button from "../../components/Button";
import "../../assets/style/admin.scss"

const AdminPage = () => {
    const { data: pastry, isLoading, isError } = useGetAllPastryQuery();

    if (isLoading) return <p>Chargement des pâtisseries...</p>;
    if (isError) return <p>Erreur lors du chargement des pâtisseries.</p>;

    return (
        <div className="container">
            <h1>Administration</h1>

            <div className="admin-panel">
                <h2>Liste des pâtisseries</h2>

                <Button label={"Ajouter une pâtisserie"} onClick={() => { }} className={"add"} />
                {pastry && pastry.length > 0 ? (
                    <GridPastry data={pastry} />
                ) : (
                    <p>Aucune pâtisserie disponible.</p>
                )}
            </div>
        </div>
    );
};

export default AdminPage;