frappe.ui.form.on('Customer', {
    refresh(frm) {
        cur_frm.fields_dict[‘state’].get_query = function(doc, dt, dn) {
            return {
                filters: {“ country”: doc.country }
            }
        }

        cur_frm.fields_dict[‘city’].get_query = function(doc, dt, dn) {
            return {
                filters: {“ state”: doc.state }
            }
        }
    }
})