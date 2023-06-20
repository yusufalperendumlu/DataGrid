import { v4 as uuidv4 } from "uuid";

interface DataItem {
  id: string;
  link: string;
  name: string;
  description: string;
}

// Verileri yerel depolamadan al
function getLocalStorageData(): DataItem[] | undefined {
  const data = localStorage.getItem("DataService");
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
}

// Verileri yerel depolamaya kaydet
function setLocalStorageData(data: DataItem[]): void {
  localStorage.setItem("DataService", JSON.stringify(data));
}

// Yerel depolamadan verileri yükle
const storedData = getLocalStorageData();
const DataService: DataItem[] = storedData || [
  {
    id: uuidv4(),
    link: 'https://instagram.com/mobilerast/',
    name: 'Instagram',
    description: 'We\'ll help you to finish your development project successfully.'
  },
  {
    id: uuidv4(),
    link: 'https://linkedin.com/company/rastmobile',
    name: 'LinkedIn',
    description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.'
  },
  {
    id: uuidv4(),
    link: 'https://behance.net/rastmobile',
    name: 'Behance',
    description: 'Software Development Agency Rast Mobile Information Technology Ltd.'
  },
  {
    id: uuidv4(),
    link: 'https://twitter.com/rastmobile',
    name: 'Twitter',
    description: 'Software Development Agency Rast Mobile Information Technology Ltd.'
  },
];

const addDataItem = (newItem: DataItem): void => {
  newItem.id = uuidv4();
  DataService.unshift(newItem);
  setLocalStorageData(DataService);
};

export { DataService, addDataItem };
