from src.data.data_process import DataProcess
from src.data.proccess_date import DataProcessByDate

def main() -> None:
    DataProcess("data/external/INDICADORES ECÓNOMICOS/", "data/processed/")
    
    DataProcessByDate("data/processed/master.csv", "data/processed/")

if __name__ == "__main__":
    main()
