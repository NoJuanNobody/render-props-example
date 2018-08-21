import React, {Component} from 'react';
import propTypes from 'prop-types'

class List extends Component{
    static propTypes = {
        render:propTypes.func.isRequired,
        url:propTypes.string.isRequired,
        searchText: propTypes.string
    };
    state={
        list:[],
        isLoading:false,
        
    };

    _fetch = async () => {
        const res = await fetch(this.props.url);
        const json = await res.json();

        this.setState({
            list:json,
            _list:json,
            isLoading:false
            
        });
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.searchText == ""){
            this.setState({list:this.state._list});
        }
        else{        
                this.setState({isLoading:true})
            // this._fetch();
            let items = this.state._list;
            items = items.filter(item=> 
                item.fname.toLowerCase().indexOf(nextProps.searchText.toLowerCase()) > -1
                || item.lname.toLowerCase().indexOf(nextProps.searchText.toLowerCase()) > -1
                || item.address.toLowerCase().indexOf(nextProps.searchText.toLowerCase()) > -1
                || item.city.toLowerCase().indexOf(nextProps.searchText.toLowerCase()) > -1
                || item.state.toLowerCase().indexOf(nextProps.searchText.toLowerCase()) > -1                
                || item.zip.toString().toLowerCase().indexOf(nextProps.searchText.toLowerCase()) > -1                
                || item.tel.toString().toLowerCase().indexOf(nextProps.searchText.toLowerCase()) > -1                
            );
            this.setState({
                list:items,
                isLoading:false
            });
        }
    }
    componentDidMount(){
        this.setState({isLoading:true}, this._fetch);
    }

    render(){
        return this.props.render(this.state);
    }
}

export default List;