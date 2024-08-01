from django.shortcuts import render
from src.dao.data_db_dao import DAO
import csv
import os

def IP_110(request):
    if request.method == "POST":
        # Retrieve form data
        company_name = request.POST.get("company_name")
        address = request.POST.get("address")
        email = request.POST.get("email")
        liaison_officer = request.POST.get("liaison_officer")
        ssn = request.POST.get("ssn")
        tel = request.POST.get("tel")
        fax = request.POST.get("fax")
        legal_form = request.POST.get("legal_form")
        cfc = request.POST.get("cfc")
        business_type = request.POST.get("business_type")
        business_function = request.POST.get("business_function")
        branches = request.POST.get("branches")
        closing_date = request.POST.get("closing_date")
        start_year = request.POST.get("start_year")
        end_year = request.POST.get("end_year")
        incomes_services_revenues_1 = request.POST.get("incomes_services_revenues_1")
        incomes_services_revenues_2 = request.POST.get("incomes_services_revenues_2")
        incomes_industries_1 = request.POST.get("incomes_industries_1")
        incomes_industries_2 = request.POST.get("incomes_industries_2")
        incomes_persons_1 = request.POST.get("incomes_persons_1")
        incomes_persons_2 = request.POST.get("incomes_persons_2")
        incomes_sale_merchandise_1 = request.POST.get("incomes_sale_merchandise_1")
        incomes_sale_merchandise_2 = request.POST.get("incomes_sale_merchandise_2")
        incomes_rents_1 = request.POST.get("incomes_rents_1")
        incomes_rents_2 = request.POST.get("incomes_rents_2")
        incomes_interests_1 = request.POST.get("incomes_interests_1")
        incomes_interests_2 = request.POST.get("incomes_interests_2")
        incomes_capital_gain_loss_1 = request.POST.get("incomes_capital_gain_loss_1")
        incomes_capital_gain_loss_2 = request.POST.get("incomes_capital_gain_loss_2")
        others_incomes_1 = request.POST.get("others_incomes_1")
        others_incomes_2 = request.POST.get("others_incomes_2")
        total_income_1 = request.POST.get("total_income_1")
        total_income_2 = request.POST.get("total_income_2")
        expenses_1 = request.POST.get("expenses_1")
        expenses_2 = request.POST.get("expenses_2")
        expenses_salaries_wages_bonus_1 = request.POST.get(
            "expenses_salaries_wages_bonus_1"
        )
        expenses_salaries_wages_bonus_2 = request.POST.get(
            "expenses_salaries_wages_bonus_2"
        )
        expenses_interests_1 = request.POST.get("expenses_interests_1")
        expenses_interests_2 = request.POST.get("expenses_interests_2")
        expenses_rents_1 = request.POST.get("expenses_rents_1")
        expenses_rents_2 = request.POST.get("expenses_rents_2")
        expenses_depreciation_1 = request.POST.get("expenses_depreciation_1")
        expenses_depreciation_2 = request.POST.get("expenses_depreciation_2")
        expenses_bad_debts_1 = request.POST.get("expenses_bad_debts_1")
        expenses_bad_debts_2 = request.POST.get("expenses_bad_debts_2")
        expenses_donation_1 = request.POST.get("expenses_donation_1")
        expenses_donation_2 = request.POST.get("expenses_donation_2")
        expenses_sales_tax_1 = request.POST.get("expenses_sales_tax_1")
        expenses_sales_tax_2 = request.POST.get("expenses_sales_tax_2")
        expenses_machinery_1 = request.POST.get("expenses_machinery_1")
        expenses_machinery_2 = request.POST.get("expenses_machinery_2")
        other_purchases_1 = request.POST.get("other_purchases_1")
        other_purchases_2 = request.POST.get("other_purchases_2")
        licenses_1 = request.POST.get("licenses_1")
        licenses_2 = request.POST.get("licenses_2")
        other_expenses_1 = request.POST.get("other_expenses_1")
        other_expenses_2 = request.POST.get("other_expenses_2")
        total_expenses_1 = request.POST.get("total_expenses_1")
        total_expenses_2 = request.POST.get("total_expenses_2")
        net_profit_1 = request.POST.get("net_profit_1")
        net_profit_2 = request.POST.get("net_profit_2")
        net_profit_income_tax_1 = request.POST.get("net_profit_income_tax_1")
        net_profit_income_tax_2 = request.POST.get("net_profit_income_tax_2")
        profit_after_tax_1 = request.POST.get("profit_after_tax_1")
        profit_after_tax_2 = request.POST.get("profit_after_tax_2")
        withheld_tax_1 = request.POST.get("withheld_tax_1")
        withheld_tax_2 = request.POST.get("withheld_tax_2")
        signature = request.POST.get("signature")
        rank = request.POST.get("rank")

        csv_file_path = "data/cuestionarios/ingreso_neto/IP-110.csv"
        file_exists = (
            os.path.isfile(csv_file_path) and os.path.getsize(csv_file_path) > 0
        )

        with open(csv_file_path, mode="a", newline="") as file:
            writer = csv.writer(file)

            if not file_exists:
                writer.writerow(
                    [
                        "company_name",
                        "address",
                        "email",
                        "liaison_officer",
                        "ssn",
                        "tel",
                        "fax",
                        "legal_form",
                        "cfc",
                        "business_type",
                        "business_function",
                        "branches",
                        "closing_date",
                        "start_year",
                        "end_year",
                        "incomes_services_revenues_1",
                        "incomes_services_revenues_2",
                        "incomes_industries_1",
                        "incomes_industries_2",
                        "incomes_persons_1",
                        "incomes_persons_2",
                        "incomes_sale_merchandise_1",
                        "incomes_sale_merchandise_2",
                        "incomes_rents_1",
                        "incomes_rents_2",
                        "incomes_interests_1",
                        "incomes_interests_2",
                        "incomes_capital_gain_loss_1",
                        "incomes_capital_gain_loss_2",
                        "others_incomes_1",
                        "others_incomes_2",
                        "total_income_1",
                        "total_income_2",
                        "expenses_1",
                        "expenses_2",
                        "expenses_salaries_wages_bonus_1",
                        "expenses_salaries_wages_bonus_2",
                        "expenses_interests_1",
                        "expenses_interests_2",
                        "expenses_rents_1",
                        "expenses_rents_2",
                        "expenses_depreciation_1",
                        "expenses_depreciation_2",
                        "expenses_bad_debts_1",
                        "expenses_bad_debts_2",
                        "expenses_donation_1",
                        "expenses_donation_2",
                        "expenses_sales_tax_1",
                        "expenses_sales_tax_2",
                        "expenses_machinery_1",
                        "expenses_machinery_2",
                        "other_purchases_1",
                        "other_purchases_2",
                        "licenses_1",
                        "licenses_2",
                        "other_expenses_1",
                        "other_expenses_2",
                        "total_expenses_1",
                        "total_expenses_2",
                        "net_profit_1",
                        "net_profit_2",
                        "net_profit_income_tax_1",
                        "net_profit_income_tax_2",
                        "profit_after_tax_1",
                        "profit_after_tax_2",
                        "withheld_tax_1",
                        "withheld_tax_2",
                        "signature",
                        "rank",
                    ]
                )

            writer.writerow(
                [
                    company_name,
                    address,
                    email,
                    liaison_officer,
                    ssn,
                    tel,
                    fax,
                    legal_form,
                    cfc,
                    business_type,
                    business_function,
                    branches,
                    closing_date,
                    start_year,
                    end_year,
                    incomes_services_revenues_1,
                    incomes_services_revenues_2,
                    incomes_industries_1,
                    incomes_industries_2,
                    incomes_persons_1,
                    incomes_persons_2,
                    incomes_sale_merchandise_1,
                    incomes_sale_merchandise_2,
                    incomes_rents_1,
                    incomes_rents_2,
                    incomes_interests_1,
                    incomes_interests_2,
                    incomes_capital_gain_loss_1,
                    incomes_capital_gain_loss_2,
                    others_incomes_1,
                    others_incomes_2,
                    total_income_1,
                    total_income_2,
                    expenses_1,
                    expenses_2,
                    expenses_salaries_wages_bonus_1,
                    expenses_salaries_wages_bonus_2,
                    expenses_interests_1,
                    expenses_interests_2,
                    expenses_rents_1,
                    expenses_rents_2,
                    expenses_depreciation_1,
                    expenses_depreciation_2,
                    expenses_bad_debts_1,
                    expenses_bad_debts_2,
                    expenses_donation_1,
                    expenses_donation_2,
                    expenses_sales_tax_1,
                    expenses_sales_tax_2,
                    expenses_machinery_1,
                    expenses_machinery_2,
                    other_purchases_1,
                    other_purchases_2,
                    licenses_1,
                    licenses_2,
                    other_expenses_1,
                    other_expenses_2,
                    total_expenses_1,
                    total_expenses_2,
                    net_profit_1,
                    net_profit_2,
                    net_profit_income_tax_1,
                    net_profit_income_tax_2,
                    profit_after_tax_1,
                    profit_after_tax_2,
                    withheld_tax_1,
                    withheld_tax_2,
                    signature,
                    rank,
                ]
            )

        DAO().insert_forms(
            data_path="data/cuestionarios/ingreso_neto/IP-110.csv",
            dtypes={
                "company_name": str,
                "address": str,
                "email": str,
                "liaison_officer": str,
                "ssn": str,
                "tel": str,
                "fax": str,
                "legal_form": str,
                "cfc": str,
                "business_type": str,
                "business_function": str,
                "branches": str,
                "closing_date": str,
                "start_year": str,
                "end_year": str,
                "incomes_services_revenues_1": float,
                "incomes_services_revenues_2": float,
                "incomes_industries_1": float,
                "incomes_industries_2": float,
                "incomes_persons_1": float,
                "incomes_persons_2": float,
                "incomes_sale_merchandise_1": float,
                "incomes_sale_merchandise_2": float,
                "incomes_rents_1": float,
                "incomes_rents_2": float,
                "incomes_interests_1": float,
                "incomes_interests_2": float,
                "incomes_capital_gain_loss_1": float,
                "incomes_capital_gain_loss_2": float,
                "others_incomes_1": float,
                "others_incomes_2": float,
                "total_income_1": float,
                "total_income_2": float,
                "expenses_1": float,
                "expenses_2": float,
                "expenses_salaries_wages_bonus_1": float,
                "expenses_salaries_wages_bonus_2": float,
                "expenses_interests_1": float,
                "expenses_interests_2": float,
                "expenses_rents_1": float,
                "expenses_rents_2": float,
                "expenses_depreciation_1": float,
                "expenses_depreciation_2": float,
                "expenses_bad_debts_1": float,
                "expenses_bad_debts_2": float,
                "expenses_donation_1": float,
                "expenses_donation_2": float,
                "expenses_sales_tax_1": float,
                "expenses_sales_tax_2": float,
                "expenses_machinery_1": float,
                "expenses_machinery_2": float,
                "other_purchases_1": float,
                "other_purchases_2": float,
                "licenses_1": float,
                "licenses_2": float,
                "other_expenses_1": float,
                "other_expenses_2": float,
                "total_expenses_1": float,
                "total_expenses_2": float,
                "net_profit_1": float,
                "net_profit_2": float,
                "net_profit_income_tax_1": float,
                "net_profit_income_tax_2": float,
                "profit_after_tax_1": float,
                "profit_after_tax_2": float,
                "withheld_tax_1": float,
                "withheld_tax_2": float,
                "signature": str,
                "rank": str,
            },
            table_name="IP_110",
            table_id="15",
            debug=False,
        )

        return render(request, "forms/succesfull.html")

    return render(request, "forms/yearly/ingreso_neto/IP-110.html")
