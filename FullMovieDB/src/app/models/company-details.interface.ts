// Generated by https://quicktype.io

export interface CompanyDetailsResponse {
    description:    string;
    headquarters:   string;
    homepage:       string;
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
    parent_company: ParentCompany;
}

export interface ParentCompany {
    name:      string;
    id:        number;
    logo_path: null;
}