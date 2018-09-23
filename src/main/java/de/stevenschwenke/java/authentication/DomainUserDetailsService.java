package de.stevenschwenke.java.authentication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Authenticate a user from the database.
 */
@Component("userDetailsService")
public class DomainUserDetailsService implements UserDetailsService {

    private final Logger log = LoggerFactory.getLogger(DomainUserDetailsService.class);

    /**
     * map user -> encrypted password
     */
    private Map<String, String> credentials = new HashMap<>(){{
        put("joe", "$2a$10$FETmvGZlLA8txiuL1Y6dqehHoUO/Q86Kxn5P72lLT6QAE37TnbCeq"); // pw: "joe"
    }};

    @Override
    public UserDetails loadUserByUsername(final String login) {

        if (!credentials.containsKey(login)) {
            throw new UsernameNotFoundException("User with login " + login + "unknown.");
        }

        String password = credentials.get(login);
        return createSpringSecurityUser(login, password);
    }

    private org.springframework.security.core.userdetails.User createSpringSecurityUser(String login, String password) {
        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        return new org.springframework.security.core.userdetails.User(login,
                password,
                grantedAuthorities);
    }
}
