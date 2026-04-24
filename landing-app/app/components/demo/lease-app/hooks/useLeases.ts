import { useContext, useState } from "react";
import mockLeases from "../data/leases.json";
import { Customer, Lease, type Equipment } from "../types";
import { useCustomContext } from "../components/Context";

export function useLeases() {
  const [leases, setLeases] = useState(mockLeases);
  const dataContext = useCustomContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(
    null,
  );

  // Open modal
  const openLeaseModal = (equipment: Equipment) => {
    setSelectedEquipment(equipment);
    setIsOpen(true);
  };

  const closeLeaseModal = () => {
    setIsOpen(false);
    setSelectedEquipment(null);
  };

  // Create lease (mock logic)
  const createLease = ({
    customer,
    startDate,
    endDate,
  }: {
    customer: Customer;
    startDate: string;
    endDate: string;
  }) => {
    if (!selectedEquipment) return;

    const days = Math.floor(
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24),
    );
    const newLease = new Lease(
      {
        id: Date.now(),
        equipment_id: selectedEquipment.id,
        equipment_name: selectedEquipment.name,
        customer_id: customer.id,
        customer_name: customer.name,
        start_date: startDate,
        end_date: endDate,
        status: "active",
        total_price: days * selectedEquipment.dailyRate,
      },
      dataContext?.data?.equipment,
      dataContext?.data?.customers,
    );

    dataContext?.updateData(newLease);
    // selectedEquipment.status = "leased";
    // dataContext?.updateData(selectedEquipment);
    closeLeaseModal();
  };

  return {
    leases,
    isOpen,
    selectedEquipment,
    openLeaseModal,
    closeLeaseModal,
    createLease,
  };
}
