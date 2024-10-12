import {
    Page,
    Text,
    View,
    Document,
    StyleSheet
} from '@react-pdf/renderer';
import { currency, shipping_price, store_url } from '../../../utils/Vars';


function Invoice({ data }) {

    // Create styles
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            width:"100%",
            backgroundColor: '#ffffff'
        },
        section: {
            padding: 10,
            marginTop: 15,
            width:"100%",
            flexGrow: 1
        }
        ,
        table: {
            width: 'auto',
            width:"100%",
            border:'none'
        },
        tableRow: {
            width:"100%",
            backgroundColor:"#E5F9E0",
            flexDirection: 'row',
            borderWidth: 0, 
        },
        tableCell: {
            padding: 5,
            width:"100%",
            border: '1px solid #ccc',
            borderWidth: 0, 
        },
        tableHeader: {
            width:"100%",
            fontWeight: 'bold',
            padding:4,
            backgroundColor: '#77BA99',
        },
        tableBody: {
            width:"100%",
        },
        summary: {
            marginTop: 20,
            padding: 10,
            width:'250px',
            backgroundColor: '#664147',
        },
        button: {
            marginTop: 20,
            padding: 10,
            backgroundColor: '#007bff',
            color: '#fff',
            textAlign: 'center',
        },
    });
    // Create Document Component
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={[{textAlign:"center",color:'#ff0000',padding:10,fontWeight:'bold'}]}>Order Details</Text>
                    <View>

                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Order ID</Text>
                                <Text style={styles.tableCell}>#{data?.data.id}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Client</Text>
                                <Text style={styles.tableCell}>{data?.data.name}</Text>
                            </View>
                        </View>

                        <View style={[{marginTop:20} , styles.table]}>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Product ID</Text>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Name</Text>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Quantity</Text>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Price</Text>
                                <Text style={[styles.tableCell, styles.tableHeader]}>P * Q</Text>
                            </View>
                            <View style={styles.tableBody}>
                                {data.data.order_items.map(item => (
                                    <View key={item.id} style={styles.tableRow}>
                                        <Text style={styles.tableCell}>
                                            <Text onPress={() => window.open(store_url + "/products/" + item.product_id)}>
                                                #{item.product_id}
                                            </Text>
                                        </Text>
                                        <Text style={styles.tableCell}>
                                            <Text onPress={() => window.open(store_url + "/products/" + item.product_id)}>
                                                item title
                                            </Text>
                                        </Text>
                                        <Text style={styles.tableCell}>{item.quantity}</Text>
                                        <Text style={styles.tableCell}>{item.price}</Text>
                                        <Text style={styles.tableCell}>{item.price * item.quantity}</Text>
                                    </View>
                                ))}
                                <View style={[ styles.tableRow , {backgroundColor:"#664147"}]}>
                                    <Text style={styles.tableCell}></Text>
                                    <Text style={styles.tableCell}></Text>
                                    <Text style={styles.tableCell}>
                                        {data.data.order_items.reduce((total, item) => total + item.quantity, 0)}
                                    </Text>
                                    <Text style={styles.tableCell}>
                                        {data.data.order_items.reduce((total, item) => total + item.price, 0)}
                                    </Text>
                                    <Text style={styles.tableCell}>
                                        {data.data.total} {currency}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={ styles.tableHeader}>Client Information</Text>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Name</Text>
                                    <Text style={styles.tableCell}>{data.data.name}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Phone</Text>
                                    <Text style={styles.tableCell}>{data.data.phone}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>City</Text>
                                    <Text style={styles.tableCell}>{data.data.city}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Email</Text>
                                    <Text style={styles.tableCell}>{data.data.email}</Text>
                                </View>
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.tableHeader]}>Address</Text>
                                    <Text style={styles.tableCell}>{data.data.address}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.summary}>
                            <Text style={{marginTop:5}}>Order Summary:</Text>
                            <Text style={{marginTop:5}}>Sub Total: {data.data.total} {currency}</Text>
                            <Text style={{marginTop:5}}>Shipping Price: {shipping_price} {currency}</Text>
                            <Text style={{marginTop:5}}>Total Price: {parseInt(data.data.total) + parseInt(shipping_price)} {currency}</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}

export default Invoice